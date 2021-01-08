package common;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/html/home")
public class HomeServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public HomeServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		EmpDAO dao = new EmpDAO();
		List<EmployeeVO> list = dao.getEmpList();
		
		String xml = "<dataset>";
		for (EmployeeVO emp : list) {
			xml += "<record>";
			xml += "<empId>" + emp.getEmployeeId() + "</empId>" 
				+ "<firstName>" + emp.getFirstName() + "</firstName>"
				+ "<lastName>" + emp.getLastName() + "</lastName>" 
				+ "<email>" + emp.getEmail() + "</email>"
				+ "<phoneNumber>" + emp.getPhoneNumber() + "</phoneNumber>" 
				+ "<hireDate>" + emp.getHireDate() + "</hireDate>" 
				+ "<jobID>" + emp.getJobID() + "</jobID>" 
				+ "<salary>" + emp.getSalary() + "</salary>";

			xml += "</record>";
		}
		xml += "</dataset>";

		response.getWriter().append(xml);
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		doGet(request, response);
	}

}
