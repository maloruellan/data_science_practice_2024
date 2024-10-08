import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CodeBlock from "components/CodeBlock";

const DockerFundamentals = () => {
  return (
    <Container>
      <h1>Docker Fundamentals</h1>

      <section id="docker-architecture">
        <h2>Docker Architecture</h2>
        <p>
          Docker uses a client-server architecture. The Docker client
          communicates with the Docker daemon, which does the heavy lifting of
          building, running, and distributing Docker containers.
        </p>
        <h3>Components:</h3>
        <ul>
          <li>
            <strong>Docker daemon:</strong> The background service running on
            the host that manages building, running, and distributing Docker
            containers.
          </li>
          <li>
            <strong>Docker client:</strong> The command line tool that allows
            users to interact with the Docker daemon.
          </li>
          <li>
            <strong>Docker registries:</strong> Stores Docker images. Docker Hub
            is a public registry that anyone can use.
          </li>
        </ul>
      </section>

      <section id="docker-objects">
        <h2>Docker Objects</h2>

        <h3>Images</h3>
        <p>
          An image is a read-only template with instructions for creating a
          Docker container. Images are often based on other images, with some
          additional customization.
        </p>
        <CodeBlock
          code={`
# Pull an image from Docker Hub
docker pull nginx:latest

# List images
docker images
          `}
          language="bash"
        />

        <h3>Containers</h3>
        <p>
          A container is a runnable instance of an image. You can create, start,
          stop, move, or delete a container using the Docker API or CLI.
        </p>
        <CodeBlock
          code={`
# Run a container
docker run -d -p 8080:80 nginx:latest

# List running containers
docker ps
          `}
          language="bash"
        />

        <h3>Volumes</h3>
        <p>
          Volumes are the preferred mechanism for persisting data generated by
          and used by Docker containers.
        </p>
        <CodeBlock
          code={`
# Create a volume
docker volume create my-vol

# Run a container with a volume
docker run -d -v my-vol:/app nginx:latest
          `}
          language="bash"
        />

        <h3>Networks</h3>
        <p>
          Docker's networking subsystem is pluggable, using drivers. Several
          drivers exist by default, and provide core networking functionality.
        </p>
        <CodeBlock
          code={`
# Create a network
docker network create my-net

# Run a container in a network
docker run -d --network my-net nginx:latest
          `}
          language="bash"
        />
      </section>

      <section id="dockerfile-basics">
        <h2>Dockerfile Basics</h2>
        <p>
          A Dockerfile is a text document that contains all the commands a user
          could call on the command line to assemble an image.
        </p>
        <CodeBlock
          code={`
# Use an official Python runtime as a parent image
FROM python:3.8-slim-buster

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Make port 80 available to the world outside this container
EXPOSE 80

# Define environment variable
ENV NAME World

# Run app.py when the container launches
CMD ["python", "app.py"]
          `}
          language="dockerfile"
        />
      </section>

      <section id="docker-cli">
        <h2>Docker CLI Commands</h2>
        <p>
          The Docker command line interface (CLI) is the primary way that many
          users interact with Docker. Here are some essential commands:
        </p>
        <CodeBlock
          code={`
# Build an image
docker build -t my-image .

# Run a container
docker run -d -p 8080:80 my-image

# Stop a container
docker stop <container_id>

# Remove a container
docker rm <container_id>

# Remove an image
docker rmi my-image

# View logs
docker logs <container_id>

# Execute a command in a running container
docker exec -it <container_id> /bin/bash
          `}
          language="bash"
        />
      </section>

      <section id="conclusion">
        <h2>Conclusion</h2>
        <p>
          Understanding these Docker fundamentals is crucial for effectively
          working with containers. In the next sections, we'll dive deeper into
          working with containers, Docker Compose, and more advanced Docker
          techniques.
        </p>
      </section>
    </Container>
  );
};

export default DockerFundamentals;
