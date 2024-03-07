// Copyright (c) 2024, BWH and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Order", {
	onload(frm) {
		console.log("running load...");
	},
	setup(frm) {
		console.log("setup...");
	},
	refresh(frm) {
		console.log("on refresh...")

		if (frm.doc.status === "New") {
			frm.add_custom_button("Accept", () => {
				// status => Accepted
				frm.set_value("status", "Accepted");
				// save the form
				frm.save();
			}, "Actions")

			frm.add_custom_button("Reject", () => {
				// status => Accepted
				frm.set_value("status", "Rejected");
				// save the form
				frm.save();
			}, "Actions")
		}
	},
	status(frm) {
		console.log("status changed");
	}
});
