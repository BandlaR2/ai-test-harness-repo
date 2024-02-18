

---**************************************************
--Retrieve questions with id, brief, and long information.
---The function fn_display_questions returns id, brief_question, and long_question columns from the questions table
---**************************************************

CREATE OR REPLACE FUNCTION fn_display_questions()
RETURNS TABLE ( id INT,brief_question VARCHAR(255), long_question TEXT)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY 
    SELECT questions.id,questions.brief_question,questions.long_question
	FROM questions;
END;
$$;

SELECT * FROM fn_display_questions();