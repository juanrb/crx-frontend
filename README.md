Generate API client from swagger

```bash
npx react-query-swagger /tanstack /input:src/api/swagger.json /output:src/api/api-client.ts /template:Fetch /serviceHost:. /use-recommended-configuration
```
## Run backend:
sudo docker build -t frontend .
sudo docker run -it -p 3000:3000 frontend
