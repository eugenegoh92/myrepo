FROM python:3.13.0-alpine3.20

LABEL name=pythondotbear

WORKDIR /app

COPY main.py utils.py requirements.txt run.sh ./
COPY public public
COPY templates templates

RUN pip install -r requirements.txt

ENV PORT=5000
ENV INSTANCE_NAME=dov-bear
ENV INSTANCE_HASH=e3c1d9dbb8eaf4c3a7a67c883f0d3b31

EXPOSE ${PORT}

ENTRYPOINT python main.py ${PORT}