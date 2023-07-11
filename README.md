# Confluence Search
> This is a sample of a production application used internally from my work at Ellucian

# 🖊️ Details
> You can find a detailed blog post about this project [here](https://codabool.com/blog/14)

### About
The production version of this app uses a machine learning search engine which was provided hundreds of thousands of lines of json data.
The data is fetched with a python script and using a REST API is fed into the engine.
Lastly the client is able to use another endpoint to get results based on a relevancy score with a provided query.

### Technologies
- React
- Python for scripting
- ElasticSearch 
  - machine learning REST API search engine
