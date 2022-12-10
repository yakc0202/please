FROM openjdk:11
ENV TZ=America/Atikokan
ARG JAR_FILE=*.jar
ADD ${JAR_FILE} app.jar
ENV PATH="${PATH}:/"
ENTRYPOINT ["java","-jar","/app.jar"]