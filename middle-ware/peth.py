from wsgiref.simple_server import make_server
from pyramid.config import Configurator
from pyramid.response import Response
from chain import EthChain

import os
import random

here = os.path.dirname(__file__)
unknownTweets = list(range(1,26))
chain = EthChain()
chain.deployContract()
chain.setupTokenAndVerify()

users = {}

def tweet(request):
    address = False
    sentiment = False
    try:
        address = request.GET['address']
        sentiment = request.GET['sentiment'] 
    except:
        pass
    choice = random.choice(unknownTweets)
    if (address and sentiment):
        if not address in users:
            users[address] = []
        users[address].append([choice, sentiment])
        if(len(users[address]) % 5 == 0):
            chain.sendTokens(address)
    tweet = open(os.path.join(
             here, 'tweets', str(choice) + '.json')).read()
    response = Response(content_type='application/json',
                        text=tweet)
    return response

if __name__ == '__main__':
    with Configurator() as config:
        config.add_route('tweet', '/')
        config.add_view(tweet, route_name='tweet')
        app = config.make_wsgi_app()
    server = make_server('0.0.0.0', 8080, app)
    server.serve_forever()