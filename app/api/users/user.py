class User:
    def __init__(self, username, email, password):
        self.username = username
        self.email = email
        self.password = password
        self.is_logged_in = False

    def login(self, username, password):
        if self.username == username and self.password == password:
            self.is_logged_in = True
            print("Erfolgreich angemeldet")
        else:
            print("Falscher Benutzername oder falsches Passwort")

    def logout(self):
        self.is_logged_in = False
        print("Erfolgreich abgemeldet")
