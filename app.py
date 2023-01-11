# import flask
from flask import Flask, render_template

# create flask app
app = Flask (__name__)


# create a route
@app.route('/')

# define the function
def home():

    # create a home page that displays a string
    return render_template('index.html' )


# boilerplate
if __name__ == '__main__':
    app.run(debug=True)