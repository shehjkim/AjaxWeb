package common;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/empListJson")
public class EmpListJsonServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public EmpListJsonServlet() {
		super();

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		EmpDAO dao = new EmpDAO();
		List<EmployeeVO> list = dao.getEmpList();

		String jsonFile = "[";
		int i=1;
		for ( EmployeeVO emp : list) {		
			jsonFile += "{";
			jsonFile += "\"id\":" + emp.getEmployeeId()+ "";
			jsonFile += ",\"firstName\":\""+emp.getFirstName()+ "\"";
			jsonFile += ",\"lastName\":\""+emp.getLastName()+ "\"";
			jsonFile +=",\"email\":\""+emp.getEmail()+"\"";
			jsonFile +=",\"hireDate\" : \""+emp.getHireDate()+ "\"";
			jsonFile += "}";
			if(list.size() != i++) {			//마지막 데이터라면 , 나오고 아니면 안나오게하는 if문임/list.size는 전체 데이터 크기
				jsonFile += ",";
			}
		}
		jsonFile += "]";

		response.getWriter().append(jsonFile);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		doGet(request, response);
	}

}
