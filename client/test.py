import xmlrpclib 
     
server = xmlrpclib.ServerProxy("http://172.17.0.3:9090/") 
data = server.get()
print data
