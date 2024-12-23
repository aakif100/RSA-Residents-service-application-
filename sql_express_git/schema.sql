show tables;

create table user (
    id varchar(50) primary key ,
    username  varchar(50) unique,
    email varchar(50) not null unique ,
    password varchar(50) not null 
);

-- <div class="father">
--         <% for(let dataset of data) { %>
--             <p> id : <%= dataset.id %> </p>
--             <p> username : <%= dataset.username %> </p>
--             <p> email : <%= dataset.email %> </p>
--             <h3>---------------------</h3>

--             <% } %>



--     </div>