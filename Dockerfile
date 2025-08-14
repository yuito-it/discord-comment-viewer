FROM node:20-slim

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN 

COPY . .

EXPOSE 3000

# 2つのJSファイルを同時に実行したい場合は、npmじゃなくてnodeコマンドで直接やるのが簡単！
CMD ["sh", "-c", "node file1.js & node file2.js && wait"]
