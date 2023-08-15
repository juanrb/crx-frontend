Generate API client from swagger

```bash
npx react-query-swagger /tanstack /input:http://localhost:5001/api-json /output:src/api/api-client.ts /template:Fetch /serviceHost:. /use-recommended-configuration
```

## Run backend:

sudo docker build -t frontend .
sudo docker run --net legaltech --name fronted -it -p 3000:3000 frontend
