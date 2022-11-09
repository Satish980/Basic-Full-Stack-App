from flask import Flask
import datetime

date = datetime.datetime.now()

app = Flask(__name__)

@app.route('/data')
def get_time():
  return {
    'Name': 'Full stack app',
    'Description': 'Flask and React app',
    'Date': date,
    'Author': 'Satish'
  }


if __name__ == '__main__':
  app.run(debug=True)