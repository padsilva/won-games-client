import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { xor } from 'lodash'
import { Close, FilterList } from '@styled-icons/material-outlined'

import Heading from 'components/Heading'
import Checkbox from 'components/Checkbox'
import Radio from 'components/Radio'
import Button from 'components/Button'

import * as S from './styles'

const ExploreSidebar = ({ items, initialValues = {}, onFilter }) => {
  const [values, setValues] = useState(initialValues)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    onFilter(values)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values])

  const handleRadio = (name, value) =>
    setValues((s) => ({ ...s, [name]: value }))

  const handleCheckbox = (name, value) => {
    const currentList = values[name] || []
    setValues((s) => ({ ...s, [name]: xor(currentList, [value]) }))
  }

  const handleFilterMenu = () => setIsOpen(false)

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />

      <S.IconWrapper>
        <FilterList
          size={24}
          aria-label="open filters"
          onClick={() => setIsOpen(true)}
        />
        <Close
          size={24}
          aria-label="close filters"
          onClick={() => setIsOpen(false)}
        />
      </S.IconWrapper>

      <S.Content>
        {items.map((item) => (
          <S.Items key={item.name}>
            <Heading lineBottom lineColor="secondary" size="small">
              {item.title}
            </Heading>
            {item.type === 'checkbox' &&
              item.fields.map((field) => (
                <Checkbox
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  labelFor={field.name}
                  isChecked={String(values[item.name])?.includes(field.name)}
                  onCheck={() => handleCheckbox(item.name, field.name)}
                />
              ))}
            {item.type === 'radio' &&
              item.fields.map((field) => (
                <Radio
                  key={field.name}
                  id={field.name}
                  name={item.name}
                  label={field.label}
                  labelFor={field.name}
                  value={field.name}
                  defaultChecked={
                    String(field.name) === String(values[item.name])
                  }
                  onChange={() => handleRadio(item.name, field.name)}
                />
              ))}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button fullWidth onClick={handleFilterMenu}>
          Filter
        </Button>
      </S.Footer>
    </S.Wrapper>
  )
}

ExploreSidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
      fields: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired
        })
      ).isRequired
    }).isRequired
  ).isRequired,
  initialValues: PropTypes.object,
  onFilter: PropTypes.func.isRequired
}

export default ExploreSidebar
