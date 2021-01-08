package Board;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/updateBoardServ")
public class updateBoardServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public updateBoardServ() {
        super();
       
    }

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String Title = request.getParameter("updateTitle");
		String Content = request.getParameter("updateContent");
		String Writer = request.getParameter("updateWriter");
		String Creation_Date = request.getParameter("updateCreation_Date");
		String Board_Id = request.getParameter("updateBoard_Id");

		BoardVO vo = new BoardVO();
		vo.setTitle(Title);
		vo.setContent(Content);
		vo.setWriter(Writer);
		vo.setCreationDate(Creation_Date);
		vo.setBoardNo(Integer.parseInt(Board_Id));

		System.out.println(vo);
		BoardDAO dao = new BoardDAO();
		if(dao.updateBoard(vo)) {
			response.getWriter().append("<h1>OK</h1>");
		}else {
			response.getWriter().append("<h1>NG</h1>");
		}
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		doGet(request, response);
	}

}
