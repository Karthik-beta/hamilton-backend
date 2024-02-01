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

# Install cron
RUN apt-get update && apt-get install -y cron

# Add cron schedule file
COPY cron_schedule /etc/cron.d/cron_schedule

# Give execution rights on the cron job
RUN chmod 0644 /etc/cron.d/cron_schedule

# Apply cron job
RUN crontab /etc/cron.d/cron_schedule

# Expose port 8000 to the outside world
EXPOSE 8000

# Define the command to makemigrations
CMD ["python", "manage.py", "makemigrations"]

# Define the command to migrate models
CMD ["python", "manage.py", "migrate"]

# # Define the command to run your application
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# Start the cron service and then run your application
CMD cron && python manage.py runserver 0.0.0.0:8000
