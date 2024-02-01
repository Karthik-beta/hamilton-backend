# Use an official Python runtime as a parent image
FROM python:3.11.7

# Set environment variables for Python
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container at /app
COPY requirements.txt /app/

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . /app/

RUN apt-get update && apt-get install -y cron

# Expose port 8000 to the outside world
EXPOSE 8000

# # Define the command to makemigrations
# CMD ["python", "manage.py", "makemigrations"]

# # Define the command to migrate models
# CMD ["python", "manage.py", "migrate"]

# CMD ["python", "manage.py", "crontab", "add"]

# # Define the command to run your application
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]


# Define the command to makemigrations, migrate models, add crontab, and run the application
CMD ["bash", "-c", "python manage.py makemigrations && python manage.py migrate && python manage.py crontab add && python manage.py runserver 0.0.0.0:8000"]