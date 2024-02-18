----***************************************************
--This function fn_delete_question_by_id is a PostgreSQL function 
-- that deleting a specific question from the questions table based on the provided id. 
----***************************************************
CREATE OR REPLACE FUNCTION fn_delete_question_by_id(question_id INT)
RETURNS VOID
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM questions WHERE id = question_id;
END;
$$;