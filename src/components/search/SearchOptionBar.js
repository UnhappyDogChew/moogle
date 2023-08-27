export const SearchOptionBar = ({
  onLanguageChange,
  onIncludeAdultChange,
  onMonthChange,
}) => {
  const onInnerLanguageChange = (e) => {
    onLanguageChange(e.target.value);
  };

  const onInnerIncludeAdultChange = (e) => {
    onIncludeAdultChange(e.target.value);
  };

  const onInnerMonthChange = (e) => {
    onMonthChange(e.target.value);
  };

  return (
    <div className="search-option-bar">
      <label for="language">언어</label>
      <select name="language" id="language" onChange={onInnerLanguageChange}>
        <option value="ko-KR">한국어</option>
        <option value="en-US">영어</option>
        <option value="jp-JP">일본어</option>
        <option value="zh-HK">중국어(홍콩)</option>
        <option value="zh-CN">중국어(중국)</option>
      </select>
      <label for="include_adult">성인영화 포함</label>
      <input
        type="checkbox"
        id="include_adult"
        name="include_adult"
        onChange={onInnerIncludeAdultChange}
      />
      <label for="year">개봉년월</label>
      <input
        type="month"
        id="year"
        name="primary_release_year"
        onChange={onInnerMonthChange}
      />
    </div>
  );
};
