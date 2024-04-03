import React, { useState, useEffect } from 'react';

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://oiqgujxdnfpzcpxpfstd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pcWd1anhkbmZwemNweHBmc3RkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA2MDkwMDQsImV4cCI6MjAyNjE4NTAwNH0.ajU77BlV4lNv0DPMZvcxe14mpRJIwKQk_JE4XK0Lb8w';

const supabase = createClient(supabaseUrl, supabaseKey);

const ChangeContent = () => {
  const [questions, setQuestions] = useState([]);
  const [briefQuestion, setBriefQuestion] = useState('');
  const [longQuestion, setLongQuestion] = useState('');
  const [searchTermBrief, setSearchTermBrief] = useState('');
  const [deleteButtonsEnabled, setDeleteButtonsEnabled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [error, setError] = useState(null);
  const [saveDisabled, setSaveDisabled] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from('questions').select('*');
      if (error) {
        throw error;
      }
      setQuestions(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const isDisabled = briefQuestion.trim() === '' || longQuestion.trim() === '';
    setSaveDisabled(isDisabled);
  }, [briefQuestion, longQuestion]);

  const handleSaveQuestion = async () => {
    try {
      let finalQuestion = longQuestion.trim();
      if (!finalQuestion) {
        finalQuestion = briefQuestion.trim();
      }

      const { data, error } = await supabase.rpc('fn_save_question', {
        brief_question: briefQuestion.trim(),
        long_question: finalQuestion
      });

      if (error) {
        throw error;
      }
      await fetchData();

      setBriefQuestion('');
      setLongQuestion('');
    } catch (error) {
      console.error('Error saving question:', error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { data, error } = await supabase.rpc('fn_delete_question_by_id', { question_id: id });
      if (error) {
        throw error;
      }
      fetchData();
    } catch (error) {
      console.error('Error deleting question:', error.message);
    }
  };

  const handleSearchBrief = async () => {
    try {
      const { data, error } = await supabase.rpc('fn_search_question', {
        searchtermbrief: searchTermBrief.trim()
      });

      if (error) {
        throw error;
      }

      setQuestions(data);
      setError(null);
    } catch (error) {
      console.error('Error searching questions:', error.message);
    }
  };

  const handleSelectQuestion = async (question) => {
    setSelectedQuestion(question);
    setBriefQuestion(question.brief_question);
    setLongQuestion(question.long_question);
  };

  const handleClear = () => {
    setBriefQuestion('');
    setLongQuestion('');
  };

  const toggleDeleteButtons = () => {
    setDeleteButtonsEnabled(!deleteButtonsEnabled);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="main-container">
      <div className="question-container">
        <div className="header-section">
          <h1 className="header">Questions</h1>
          <button onClick={toggleDeleteButtons} className="delete-button">
            {deleteButtonsEnabled ? 'Hide Delete' : 'Show Delete'}
          </button>
          <div className="search-section">
            <input
              type="text"
              placeholder="Search for question"
              value={searchTermBrief}
              onChange={(e) => setSearchTermBrief(e.target.value)}
              className="search-input"
            />
            <button onClick={handleSearchBrief} className="search-button">
              Search
            </button>
          </div>
        </div>
        <div className="question-list">
          {questions.map((question, index) => (
            <div key={`${question.id}-${index}`} className="question-box">
              <a href="#" onClick={() => handleSelectQuestion(question)}>
                <strong className="question-text">{index + 1}. {question.brief_question}</strong>
              </a>
              {deleteButtonsEnabled && (
                <button onClick={() => handleDelete(question.id)} className="delete-button enabled">
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="input-container">
        <h2 className="input-title">Add Question</h2>
        <label className="input-label">Brief Question:</label>
        <input
          type="text"
          placeholder='Enter brief question'
          value={briefQuestion}
          onChange={(e) => setBriefQuestion(e.target.value)}
          className="input-field"
        />
        <label className="input-label">Long Question:</label>
        <textarea
          placeholder='Enter long question'
          value={longQuestion}
          onChange={(e) => setLongQuestion(e.target.value)}
          className="input-field"
        ></textarea>
        <button onClick={handleSaveQuestion} disabled={saveDisabled} className="save-button">Save</button>
        <button onClick={handleClear} className="clear-button">Clear</button>
      </div>
    </div>
  );
};

export default ChangeContent;
