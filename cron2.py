import subprocess

def execute_docker_command(container_name, command):
    try:
        subprocess.run(['sudo', 'docker', 'exec', '-it', container_name] + command.split(), check=True)
        print(f"Command executed successfully on {container_name}.")
    except subprocess.CalledProcessError as e:
        print(f"Error executing command: {e}")

# Replace 'sael-backend-backend-1' with your actual container name
container_name = 'sael-backend-backend-1'
command_to_execute = 'python manage.py assemblyline_andon'

execute_docker_command(container_name, command_to_execute)
