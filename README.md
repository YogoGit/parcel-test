To build, run the command at the project's top-level directory:

```
docker build -t parcel-test:test -f docker/Dockerfile .
```

To run, try the following:
```
docker run --rm --name parcel-test \
   -p 8080:80 -p 1235:1235 \
   parcel-test
```
