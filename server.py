from bottle import route, run, get, post, request, static_file

@route('/<filepath:path>')
def server_static(filepath):
  return static_file(filepath, root='static')

@route('/')
def server_index():
  return static_file('index.html', root='static')

run(host='localhost', port=8080, debug=True)