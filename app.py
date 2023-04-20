from flask import Flask, render_template, request, redirect, url_for, session
import re
  
  
app = Flask(__name__)


@app.route('/')
def index():
    return redirect('/home')

@app.route('/home')
def home():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login.html')

if __name__ == '__main__':
    app.run()

