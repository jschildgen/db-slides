package lecture;

import java.math.BigDecimal;
import java.sql.*;

public class MetadataExample {

    public static void main(String[] args) {
        final String url = "jdbc:postgresql://localhost/meine_db";
        final String user = "test";
        final String password = "test";
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(url, user, password);

            DatabaseMetaData md = conn.getMetaData();
            //                          cata. schema     tabelle typ
            ResultSet rs = md.getTables(null, "webshop", "%",    null);
            while (rs.next()) {
                System.out.println(rs.getString(3));
            }

            Statement st = conn.createStatement();
            rs = st.executeQuery("SELECT bezeichnung, preis" +
                            " FROM webshop.produkte");

            ResultSetMetaData meta = rs.getMetaData();
            int numberColumns = meta.getColumnCount(); int i;
            for (i = 1; i <= numberColumns; i++) {
                String cName = meta.getColumnName(i);
                String dType = meta.getColumnTypeName(i);
                System.out.println(" Name: " + cName + " Datentyp: " + dType);
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
