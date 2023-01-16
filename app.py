# import flask
from flask import Flask, render_template

# create flask app
app = Flask (__name__)


# create a route
@app.route('/')
def home():

    # create a home page that displays a string
    return render_template('index2.html' )

@app.route("/associations")
def associations():
    return render_template("associations.html")

@app.route("/historyData")
def historyData():
    return render_template("historyData.html")

@app.route("/index2")
def index2():
    return render_template("index2.html")
# boilerplate
if __name__ == '__main__':
    app.run(debug=True)