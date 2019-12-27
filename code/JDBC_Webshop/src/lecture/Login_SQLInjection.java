package lecture;

import java.math.BigDecimal;
import java.sql.*;
import java.util.Scanner;

public class Login_SQLInjection {

    public static void main(String[] args) {
        final String url = "jdbc:postgresql://localhost/meine_db";
        final String user = "test";
        final String password = "test";
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(url, user, password);

            String bezeichnung;
            BigDecimal preis;
            Scanner scan = new Scanner(System.in);

            Statement st = conn.createStatement();
            System.out.print("E-Mail: ");
            String email = scan.nextLine();
            System.out.print("Passwort: ");
            String pass = scan.nextLine();
            ResultSet rs = st.executeQuery("SELECT true FROM" +
             " webshop.kunden WHERE email = '"+email+"'" +
             " AND passwort = md5('"+pass+"')");
            if (rs.next()) {
                System.out.println("Eingeloggt!");
            } else {
                System.out.println("Falsche Login-Daten!");
            }
            rs.close();
            st.close();

            conn.close();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }
}
