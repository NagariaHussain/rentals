# Copyright (c) 2024, BWH and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Driver(Document):
	def before_save(self):
		self.full_name = f"{self.first_name} {self.last_name}"

	def send_alert(self):
		print("sending message")

