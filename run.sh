docker build --tag=canvastest:latest .

docker run -it -v $(pwd)/output:/app/output canvastest:latest
