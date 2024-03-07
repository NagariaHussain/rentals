// Copyright (c) 2024, BWH and contributors
// For license information, please see license.txt

frappe.query_reports["Revenue by Make"] = {
	"filters": [
		{
			"fieldname": "my_filter",
			"label": "My Filter",
			"fieldtype": "Link",
			"options": "Vehicle"
		}
	]
};
