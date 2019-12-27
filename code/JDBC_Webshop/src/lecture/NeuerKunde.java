package lecture;

import java.math.BigDecimal;
import java.sql.*;
import java.util.Scanner;

public class NeuerKunde {

    public static void main(String[] args) {
        final String url = "jdbc:postgresql://localhost/meine_db";
        final String user = "test";
        final String password = "test";
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(url, user, password);

            Scanner scan = new Scanner(System.in);
            PreparedStatement st = conn.prepareStatement(
             "INSERT INTO webshop.kunden (name, email, passwort) " +
             "VALUES (?, ?, md5(?))");
            System.out.print("Name: ");
            st.setString(1, scan.nextLine());
            System.out.print("E-Mail: ");
            st.setString(2, scan.nextLine());
            System.out.print("Passwort: ");
            st.setString(3, scan.nextLine());
            int zeilenEingefuegt = st.executeUpdate();

            System.out.println(zeilenEingefuegt);

            st.close();

            conn.close();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }
}
