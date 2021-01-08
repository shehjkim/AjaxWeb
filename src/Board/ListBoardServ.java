package Board;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ListBoardServ")
public class ListBoardServ extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

    public ListBoardServ() {
        super();

    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		BoardDAO dao = new BoardDAO();
		String xml = "<dataset>";
		List<BoardVO> list = dao.getBoardList();
		for (BoardVO bl : list) {
			xml += "<record>";
			xml += "<Board_Id>" + bl.getBoardNo() + "</Board_Id>"
					+ "<Title>" + bl.getTitle() + "</Title>"
					+ "<Content>" + bl.getContent() + "</Content>"
					+ "<Writer>" + bl.getWriter() + "</Writer>"
					+ "<Creation_Date>" + bl.getCreationDate() + "</Creation_Date>";
			xml += "</record>";
		}
		xml += "</dataset>";
		response.getWriter().append(xml);
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
