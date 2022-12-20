# This file contains a class modeling a todo item
import datetime
class Todo:
    def __init__(self, title, due_date, description=""):
        self.title = title
        self.description = description
        self.is_completed = False
        self.due_date = due_date

    def mark_as_completed(self):
        self.is_completed = True

    def __str__(self):
        status = "Completed" if self.is_completed else "In progress"
        due_date_str = self.due_date.strftime("%d.%m.%Y")
        return f"{self.title} ({status}, due on {due_date_str}): {self.description}: {self.description}"