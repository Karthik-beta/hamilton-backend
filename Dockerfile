FROM python:3.11.7

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY requirements.txt /app/
RUN pip install -r requirements.txt

COPY . /app/

# Install cron
RUN apt-get update && apt-get install -y cron

# Copy the crontab file to the cron directory
COPY crontab_file /etc/cron.d/crontab_file

# Give execution rights to the cron job
RUN chmod 0644 /etc/cron.d/crontab_file

# Apply the cron job
RUN crontab /etc/cron.d/crontab_file

# Expose port 8000 for development (adjust for production)
EXPOSE 8000

# Separate CMD instructions for better maintainability
CMD ["python", "manage.py", "makemigrations"]
CMD ["python", "manage.py", "migrate"]
CMD ["python", "manage.py", "crontab", "add"]
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
