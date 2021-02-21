package lecture;

import java.math.BigDecimal;
import java.sql.*;
import java.util.Scanner;

public class ZeigeProdukt_SQLInjection {

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
            System.out.print("Gib einen Hersteller ein: ");
            ResultSet rs = st.executeQuery("SELECT bezeichnung, preis FROM" +
             " webshop.produkte WHERE hersteller = '"+scan.nextLine()+"'");
            while (rs.next()) {
                bezeichnung = rs.getString(1);
                preis = rs.getBigDecimal(2);
                System.out.println(bezeichnung+" kostet "+preis+" EUR");
            }
            rs.close();
            st.close();

            conn.close();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }
}
