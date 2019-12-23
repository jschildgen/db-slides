package lecture;

import java.math.BigDecimal;
import java.sql.*;

public class ZeigeProdukte {

    public static void main(String[] args) {
        final String url = "jdbc:postgresql://localhost/meine_db";
        final String user = "test";
        final String password = "test";
        Connection conn = null;
        try {
            // Verbindung aufbauen
            conn = DriverManager.getConnection(url, user, password);
            System.out.println("Verbunden mit der PostgreSQL-DB!");

            String bezeichnung;
            BigDecimal preis;

            // Mit der DB interagieren...
            Statement st = conn.createStatement();
            ResultSet rs = st.executeQuery("SELECT bezeichnung, preis " +
                                           "FROM webshop.produkte");
            while (rs.next()) {
                bezeichnung = rs.getString(1);
                preis = rs.getBigDecimal(2);
                System.out.println(bezeichnung+" kostet "+preis+" EUR");
            }
            rs.close();
            st.close();

            // Am Ende Verbindung wieder schließen
            conn.close();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }
}
