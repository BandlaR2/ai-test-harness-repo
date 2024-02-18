--***************************************************
-- This function fn_update_question is a PostgreSQL function 
-- that updates the content of a specific question in the questions table based on the provided id.
--***************************************************

CREATE OR REPLACE FUNCTION fn_update_question(
    question_id INT,
    new_brief_question VARCHAR(255),
    new_long_question TEXT
)
RETURNS VOID
LANGUAGE plpgsql
AS $$
BEGIN
    UPDATE questions
    SET 
        brief_question = new_brief_question,
        long_question = new_long_question
    WHERE id = question_id;
END;
$$;
