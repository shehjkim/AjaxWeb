package common;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/updateEmp")
public class updateEmpServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public updateEmpServ() {
        super();
        
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String eid = request.getParameter("eid");
		String fName = request.getParameter("fName"); // 파라미터 이름
		String lName = request.getParameter("lName");
		String email = request.getParameter("email");
		String pNumber = request.getParameter("pNumber");
		String hireDate = request.getParameter("hireDate");
		String jobId = request.getParameter("jobId");
		
		EmployeeVO vo = new EmployeeVO();
		vo.setFirstName(fName);
		vo.setLastName(lName);
		vo.setEmail(email);
		vo.setPhoneNumber(pNumber);
		vo.setHireDate(hireDate);
		vo.setJobID(jobId);
		
		EmpDAO dao = new EmpDAO();
		EmployeeVO v = dao.updateEmp(vo);
		String result = "<result>";
		result += "<eid>" + v.getEmployeeId() + "</eid>";
		result += "<fName>" + v.getFirstName() + "</fName>";
		result += "<lName>" + v.getLastName() + "</lName>";
		result += "<email>" + v.getEmail() + "</email>";
		result += "<hireDate>" + v.getHireDate() + "</hireDate>";
		result += "<jobId>" + v.getJobID() + "</jobId>";
		result += "<pNumber>" + v.getPhoneNumber() + "</pNumber>";
		result += "<salary>" + v.getSalary() + "</salary>";		
		result += "</result>";
		
		response.getWriter().append(result);
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		doGet(request, response);
	}

}
