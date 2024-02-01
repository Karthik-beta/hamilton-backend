import subprocess

def run_docker_command():
    try:
        # Command to run
        command = ["sudo", "docker", "exec", "-it", "sael-backend-backend-1", "python", "manage.py", "assemblyline_andon"]

        # Run the command
        subprocess.run(command, check=True)

    except subprocess.CalledProcessError as e:
        print(f"Error: {e}")
    except Exception as ex:
        print(f"An unexpected error occurred: {ex}")

if __name__ == "__main__":
    run_docker_command()
