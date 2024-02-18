---**************************************************
---The function fn_delete_all_questions() that deletes all data from the questions
---**************************************************
CREATE OR REPLACE FUNCTION fn_delete_all_questions()
RETURNS VOID
LANGUAGE plpgsql
AS $$
BEGIN
    DELETE FROM questions;
END;
$$;


SELECT fn_delete_all_questions();
