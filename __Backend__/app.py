from flask import Flask,request,jsonify,make_response,redirect,url_for,render_template
from pymongo import MongoClient
import bcrypt

'''
********************************************************
Connecting to MongoDB - Database
Database = UserDB
Collection = UserDetails
********************************************************
'''

cluster=MongoClient("mongodb+srv://temp2486:temp2486@cluster0.uwqlm.mongodb.net/UserDB?retryWrites=true&w=majority")
db=cluster["UserDB"]
UserDetails=db["UserDetails"]

'''
***************************************************************
User Data is Stored in UserDetails Collection after
performing BLOWFISH BLOCK CIPHER ENCRYPTION on PASSWORDS
***************************************************************
'''


app=Flask(__name__)
'''
{Name, Date, Month, Year, Phone, Password, Username, Aadhar}
Username,Password
'''
@app.route("/")
@app.route("/signin",methods=["POST","GET"])
def signin():

    if request.method=="POST":
        try:
            username=request.form["Username"]               #Username defaults to Email provided during registration
            userPasswordHash=request.form["Password"]       #Password Stored is Cryptic Hash Password



            # Checking if Username Exits in Database ,
            # if does , Checking Password with Corresponding Hash

            UsernameExist=UserDetails.find_one({"Username":username})

            if UsernameExist is not None:
                # Checking Corresponding Password
                Details=(UserDetails.find_one({"Username":username}))

                #Generating Correct Hashed Password
                correctPasswordHash= Details["Password"]

                #Encoding to utf-8 before encryption
                userPasswordHash=userPasswordHash.encode('utf-8')

                """ CHECKING USER VALIDITY """
                if bcrypt.hashpw(userPasswordHash,correctPasswordHash)==correctPasswordHash:
                    """
                    *** USER VERIFIED ****
                    """
                    message={
                        "Successful":True,
                        "Message":"USER SUCCESSFULLY VERIFIED"
                    }

                    resp=make_response(jsonify(message),200)            # Response Objects with Response Codes
                    return resp

                else:
                    message = {
                        "Successful": False,
                        "Message": "ACCOUNT PASSWORD INCORRECT"
                    }

                    resp = make_response(jsonify(message), 401)
                    return resp

            message = {
                "Successful": False,
                "Message": "NO SUCH USER EXIST"
            }

            resp = make_response(jsonify(message), 401)
            return resp

        except Exception as e:
            message = {
                "Successful": False,
                "Message": str(e)
            }

            resp = make_response(jsonify(message), 403)
            return resp

    elif request.method == "GET":
        try:
            return render_template('index.html'),200

        except Exception as e:
            message = {
                "Successful": False,
                "Message": str(e)
            }
            resp = make_response(jsonify(message), 403)
            return resp



@app.route("/signup",methods=["POST","GET"])
def signup():

    if request.method=="POST":
        try:
            userData=request.get_json()
            username=userData["Username"]
            userPassword=userData["Password"]
            userPassword=userPassword.encode('utf-8')
            userNameExist = UserDetails.find_one({"Username": username})
            if userNameExist is None:

                '''
                *******************************************************
                PERFORMING ENCRYPTION AND SAVING "ENCRYPTED PASSWORD"
                *******************************************************
                '''

                finalHashedPassword=bcrypt.hashpw(userPassword,bcrypt.gensalt())
                userData["Password"]=(finalHashedPassword)
                '''Inserting Details Into Database After Confirmation'''

                UserDetails.insert_one(userData)

                message = {
                    "Successful": True,
                    "Message": "USER ACCOUNT SUCCESSFULLY CREATED"
                }

                resp = make_response(jsonify(message), 200)
                return resp
        except Exception as e:
            message = {
                "Successful": False,
                "Message": str(e)
            }
            resp = make_response(jsonify(message), 403)
            return resp

        else:
            text = f"{username} ALREADY EXISTS ! REGISTRATION ABORTED"
            message = {
                "Successful": False,
                "Message": text
            }

            resp = make_response(jsonify(message), 409)         # Response Objects with Response Codes
            return resp

    elif request.method == "GET":
        try:
            return render_template('signup.html'),200

        except Exception as e:
            message = {
                "Successful": False,
                "Message": str(e)
            }
            resp = make_response(jsonify(message), 403)
            return resp




if(__name__=="__main__"):
    app.run(debug=True)
