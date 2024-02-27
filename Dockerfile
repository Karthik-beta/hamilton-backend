FROM python:3.11.7

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set the working directory
WORKDIR /app

# Copy requirements file and install dependencies
COPY requirements.txt /app/
RUN pip install -r requirements.txt

# Copy the entire application
COPY . /app/

# Install cron
RUN apt-get update && apt-get install -y cron

# Expose port 8000 for development (adjust for production)
EXPOSE 8000

# Apply the cron jobs defined in Django settings
CMD ["sh", "-c", "python manage.py crontab add && python manage.py runserver 0.0.0.0:8000"]
