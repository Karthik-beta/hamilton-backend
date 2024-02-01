import subprocess

def execute_command_in_docker(image_name, command):
    try:
        # Command to enter Docker bash shell and execute the provided command
        docker_command = f"docker run -it {image_name} /bin/bash -c '{command}'"

        # Execute the Docker command using subprocess
        subprocess.run(docker_command, shell=True, check=True)

    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

# Replace 'your_docker_image_name' with the actual name of your Docker image
docker_image_name = 'sael-backend-backend-1'

# Command to be executed within the Docker bash shell
docker_command_to_execute = "python manage.py assemblyline_andon"

# Call the function with the provided image name and command
execute_command_in_docker(docker_image_name, docker_command_to_execute)
