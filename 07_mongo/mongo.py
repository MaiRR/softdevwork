import pymongo
server_address = "157.230.95.43"
connection = pymongo.MongoClient(server_address)
db = connection.computerInteraction
collection = db.movies


def title(title):
    titles = collection.find({'title': title})
    print titles

def year(year):
    years = collection.find({'year': year})
    print years

def genreAndActor(genre, actor):
    gAnda = collection.find({ '$and': [ {"genres": genre}, {"cast": actor} ]})
    print gAnda



