----************************************************
--The PostgreSQL function create_table_questions creates a table named "questions" 
--with columns: "id" (auto-incremented), "brief_question" (255 characters), and "long_question" (text)
----************************************************
CREATE  FUNCTION create_table_questions()
RETURNS VOID 
LANGUAGE plpgsql
AS $$
BEGIN
  CREATE TABLE questions(
     id SERIAL PRIMARY KEY,
	 brief_question VARCHAR(255),
	 long_question Text
	  );
END;
$$ ;

----***************************************************
--The PostgreSQL function create_log_table creates a table named "log_table"
--with columns: "id" (auto-incremented), "question_text" (255 characters), "answer_text" (text),
---and "log_date" (timestamp with default value current timestamp).
----************************************************

CREATE FUNCTION create_log_table()
RETURNS VOID 
LANGUAGE plpgsql
AS $$
BEGIN
  CREATE TABLE log_table (
    id SERIAL PRIMARY KEY,
    question_text VARCHAR(255),
    answer_text TEXT,
    log_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
END;
$$;