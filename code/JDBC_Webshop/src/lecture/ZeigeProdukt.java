package lecture;

import java.math.BigDecimal;
import java.sql.*;
import java.util.Scanner;

public class ZeigeProdukt {

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

            PreparedStatement st = conn.prepareStatement(
             "SELECT bezeichnung, preis FROM webshop.produkte " +
             "WHERE hersteller = ?");
            System.out.print("Gib einen Hersteller ein: ");
            st.setString(1, scan.nextLine());
            ResultSet rs = st.executeQuery();
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
