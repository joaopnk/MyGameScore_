## [WEB] MYGAMESCORE </h2>
<hr>
💻 Preview: https://youtu.be/qbmlSbsIHj4


<h3>🚀 Tecnologias utilizadas </h3>
<ul>
  <li> Bootstrap</li>
  <li> JavaScript </li>
  <li> Jquery</li>
  <li> Node </li>
  <li> SQLServer </li>
   <li> C# (Embora não houve sucesso a minha tentativa de primeiro contato com C# construir um back-end & consumir a API, deixei os arquivos de minha tentativa disponivel). </li>
</ul>

<hr>
<h3>⚙ Dependências:</h3>
<ul>
  <li> API NODE: </li>
   <p>Lembre-se de instalar as dependências pelo terminal atráves do comando: <i>npm install</i> e <strong>iniciar a API</strong> atráves do comando no terminal: <i>"node src/server.js"</i>, após isso ele iniciara a conexão com O SQLSERVER.
   As config de conexão estão no <i>db.js</i>
   </p>
     <li> SQLSERVER: </li>
   <p>Arquivo para importar o DB utilizado no Preview esta disponivel (<i>db.ipynb</i>).
   Porem, se optar por configurar manualmente, crie um DB(localhost) com o nome de: mygamescore / usuario: sa / senha: 123 (conforme o arquivo da API "db.js")
   <br>
   </p>
   <h4>Preview DB</h4>
   <table>
    <thead>
      <th>Codigo</th>
      <th>Data</th>
      <th>Pontos</th>
     </thead>
     <tbody>
      <td>INTEGER | autoIncrement(TRUE) | allowNull(FALSE) | primaryKey(TRUE)</td> 
      <td>DATE | allowNull(FALSE)</td>
      <td>INTEGER | allowNull(FALSE)</td>
     </tbody>
    </table>
</ul>
<hr>
<h3>✅ Após API iniciada (rodando) e DB configurado, basta abrir o home.html e utilziar</h3>



<hr>

