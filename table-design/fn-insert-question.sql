--
-- This function will insert a question into the table questions
--
----***************************************************
--This function fn_insert_question is a PostgreSQL function 
--that inserts three rows of data into the questions table.
----***************************************************
CREATE OR REPLACE FUNCTION fn_insert_question(
    p_brief_question VARCHAR(255),
    p_long_question TEXT
)
RETURNS VOID
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO questions (brief_question, long_question) VALUES
     (p_brief_question, p_long_question);
END;
$$;
